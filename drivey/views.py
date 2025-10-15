from django.shortcuts import render
from django.http import HttpResponse


# ログインページの表示
def login(request):
    return render(request, 'drivey/login.html')


# 提案画面の表示
def suggest(request):
    return render(request, 'drivey/suggest.html')
