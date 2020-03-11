from django.db.models import Count
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from .serializers import TrailSerializer
from .models import Trail


class TrailViewSet(viewsets.ModelViewSet):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def list(self, request, *args, **kwargs):
        tags = request.query_params.getlist('tags', [])
        # annotate creates a "virtual" column num_tags that counts how many tags were matched.
        # Later we can filter by the virtual column "num_tags" to make sure that we found all
        # the tags that were passed as parameters
        if tags:
            trails = Trail.objects.filter(tag__name__in=tags)\
                .annotate(num_tags=Count('tag')).filter(num_tags=len(tags))
        else:
            trails = Trail.objects.all()
        serializer = TrailSerializer(trails, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {'status': 'OK'}
        return Response(content)
