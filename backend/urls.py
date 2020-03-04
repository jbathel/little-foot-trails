from django.contrib import admin
from django.urls import path, include
from .views import index

from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),
    path('user/', include('user.urls'))
]
