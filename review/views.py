from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import ReviewSerializer
from .models import Review


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    parser_classes = [JSONParser]

    def list(self, request, *args, **kwargs):
        trail = request.query_params.get('trail', None)
        reviews = Review.objects.filter(trail=trail)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {'status': 'OK'}
        return Response(content)

    # def post(self, request):
    #     name = request.body.get('name')
    #     review = request.body.get('review')
    #     stars = request.body.get('stars')
    #     user = request.body.get('user')
    #     trail = request.body.get('trail')
    #     if not name or not review or not stars or not user or not trail:
    #         return Response({}, status=status.HTTP_400_BAD_REQUEST)
    #     serializer = ReviewSerializer(data={
    #         'name': name,
    #         'review': review,
    #         'stars': stars,
    #         'user': user,
    #         'trail': trail
    #     })
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
