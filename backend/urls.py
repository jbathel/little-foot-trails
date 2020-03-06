from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from .views import index
from trail.views import TrailViewSet
from review.views import ReviewViewSet


router = routers.DefaultRouter()
router.register(r'trails', TrailViewSet)
router.register(r'reviews', ReviewViewSet)


urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),
    path('user/', include('user.urls')),
    path('api/', include(router.urls)),
    re_path(r'^(?:.*)/?$', index, name='index'),
]
