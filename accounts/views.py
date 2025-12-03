from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

def login_view(request):
    """ ログインビュー """
    if request.method == 'POST':
        username_data = request.POST.get('username')
        password_data = request.POST.get('password')
        user = authenticate(request, username=username_data, password=password_data)

        if user is not None:
            login(request, user)
            # 認証成功時、'drivey' アプリの 'top' (top_view) へリダイレクト
            return redirect('top') 
        else:
            # 認証失敗時
            # テンプレートは 'drivey' アプリのものを指定
            return render(request, 'drivey/login.html', {'error': 'ユーザー名またはパスワードが違います'})
    else:
        # GETリクエスト（ページ表示時）
        # テンプレートは 'drivey' アプリのものを指定
        return render(request, 'drivey/login.html')

def logout_view(request):
    """ ログアウトビュー """
    logout(request)
    # ログアウト後、'accounts' アプリの 'login' (login_view) へリダイレクト
    return redirect('login')
