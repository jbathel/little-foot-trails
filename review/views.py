from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import ReviewSerializer
from .models import Review


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)

    def list(self, request, *args, **kwargs):
        filters = request.query_params.get('filters', None)
        reviews = Review.objects.filter(trail=filters)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {'status': 'OK'}
        return Response(content)
