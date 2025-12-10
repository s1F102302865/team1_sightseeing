from django.shortcuts import render
from django.http import HttpResponse


# ログインページの表示
def login(request):
    return render(request, 'drivey/login.html')

def api(request):
    return render(request, 'drivey/api.html')
