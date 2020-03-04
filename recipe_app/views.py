from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.template import loader


def index(request):
    return render(request, 'index.html', {})


class HomepageView(TemplateView):
    template_name = 'index.html'

    def switch(self):
        return redirect('recipes')
        

class RecipeView(TemplateView):
    template_name = 'recipes.html'

