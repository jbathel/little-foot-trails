from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions, routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from user.views import get_current_user, CreateUserView
from .views import index
from trail.views import TrailViewSet
from review.views import ReviewViewSet
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'trails', TrailViewSet)
router.register(r'reviews', ReviewViewSet)


schema_view = get_schema_view(
   openapi.Info(
      title='Little Foot Trails API',
      default_version='v1',
      description='All APIs used for Little Foot Trails',
      terms_of_service='https://www.google.com/policies/terms/',
      contact=openapi.Contact(email='rmiyazaki11@ucsbalum.com'),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('', index, name='index'),
    path('admin/doc/', include('django.contrib.admindocs.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api_docs/', schema_view.with_ui(
        'swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/token/',
         TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),
    path('current_user/', get_current_user),
    path('user/create/', CreateUserView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) \
              + [re_path(r'^(?:.*)/?$', index, name='index')]
