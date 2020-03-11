from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import TagSerializer
from .models import Tag
from trail.models import Trail


class TagsViewSet(viewsets.ModelViewSet):
    queryset = Trail.objects.all()
    serializer_class = TagSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def list(self, request, *args, **kwargs):
        trail_id = request.query_params.get('trailId')
        if trail_id:
            trail = Trail.objects.get(id=trail_id)
            tags = trail.tags.all()
        else:
            tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data)
