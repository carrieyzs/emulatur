from django.urls import path
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^$', views.HomepageView.as_view(), name='home'), # Notice the URL has been named
    url('/recipes/', views.RecipeView.as_view(), name='recipes'),
    path(r'index.html', views.index, name='index'),
]