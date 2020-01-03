from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.template import loader


def index(request):
    return render(request, 'index.html', {})


class HomepageView(TemplateView):
    template_name = 'index.html'
        
