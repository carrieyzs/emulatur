from django.urls import path, include
from django.contrib import admin

from . import views

urlpatterns = [
    path('emulatur_app/', include('emulatur_app.urls')),
    path('admin/', admin.site.urls),
]
