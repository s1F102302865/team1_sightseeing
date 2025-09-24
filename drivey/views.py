from django.shortcuts import render
from django.http import HttpResponse


# ログインページの表示
def index(request):
    return render(request, 'drivey/suggest.html')
