from django.urls import path

from .views import ArticleDetailview,ArticleListview


urlpatterns = [
    path('',ArticleListview.as_view(),name="api-list"),
    path('<pk>',ArticleDetailview.as_view(),name="api-detail"),
]