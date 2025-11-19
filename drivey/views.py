from django.shortcuts import render
from django.http import HttpResponse


# ログインページの表示
def login(request):
    return render(request, 'drivey/login.html')

# トップページの表示
def top(request):
    return render(request, 'drivey/top.html')

