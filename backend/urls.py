from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import index
from trail.views import TrailViewSet
from review.views import ReviewViewSet
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'trails', TrailViewSet)
router.register(r'reviews', ReviewViewSet)


urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/',
         TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),
   re_path(r'^(?:.*)/?$', index, name='index'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
