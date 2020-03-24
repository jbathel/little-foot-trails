from django.db.models import Count
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from .serializers import TrailSerializer
from .models import Trail


class TrailViewSet(viewsets.ModelViewSet):
    """Trail View Set - also RESTful API Endpoint

    Arguments:
        viewsets {ModelViewSet} -- Django builtin ViewSet
    """
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def list(self, request, *args, **kwargs):
        """A list function for Trail Instances

        Arguments:
            request {tags} -- A list of tag ids

        Returns:
            Reviews -- Returns an array of Trail Objects
        """
        filters = {}
        tags = request.query_params.getlist('tags', [])
        featured = request.query_params.get('featured', None)
        if featured and featured in ['true', 'false']:
            if featured == 'true':
                filters['featured'] = True
            else:
                filters['featured'] = False
        if tags:
            filters['tags__name__in'] = tags
            trails = Trail.objects.filter(**filters)\
                .annotate(num_tags=Count('tags')).filter(num_tags=len(tags))
        else:
            trails = Trail.objects.filter(**filters)

        serializer = TrailSerializer(trails, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        """Function to get a specific Trail

        Arguments:
            request {trail.id} -- Review id of the Trail Object

        Returns:
            Review -- Returns a Trail Object
        """
        content = {'status': 'OK'}
        return Response(content)
