from django.urls import path
from . import views

urlpatterns = [
    # path('URLパターン', ビュー関数, name='URLの名前')
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]
