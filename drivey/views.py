from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url='login') # ログイン必須（未ログイン時は 'login' (login_view) へ飛ばす）
def top_view(request):
    """ ログイン後のホームページ """
    # drivey/templates/drivey/top.html を表示
    return render(request, 'drivey/top.html')

