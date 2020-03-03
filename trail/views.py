from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import *
from .models import Trail


class TrailViewSet(viewsets.ModelViewSet):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def list(self, request, *args, **kwargs):
        filters = request.query_params.get('filters', None)
        trails = Trail.objects.filter(tag=filters)
        serializer = TrailSerializer(trails, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {'status': 'ok'}
        return Response(content)
