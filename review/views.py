from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import ReviewSerializer
from .models import Review


class ReviewViewSet(viewsets.ModelViewSet):
    """Review View Set - also RESTful API Endpoint

    Arguments:
        viewsets {ModelViewSet} -- Django builtin ViewSet
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    parser_classes = [JSONParser]

    def list(self, request, *args, **kwargs):
        """A list function for Review Instances

        Arguments:
            request {trail} -- traid id of reviews

        Returns:
            Reviews -- Returns an array of Review Objects
        """
        trail = request.query_params.get('trail', None)
        reviews = Review.objects.filter(trail=trail)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        """Function to get a specific Review

        Arguments:
            request {review.id} -- Review id of the Review Object

        Returns:
            Review -- Returns a Review Object
        """
        content = {'status': 'OK'}
        return Response(content)
