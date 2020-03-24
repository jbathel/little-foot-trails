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
