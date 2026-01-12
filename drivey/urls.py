from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('login/', views.login, name='login'), 
    path('api/', views.api, name='api'),
    path('top/', views.top_view, name='top'),
    path('recommendation/', views.recommendation, name='recommendation'),
    path('intoroduction/', views.intoroduction, name='intoroduction'),
]