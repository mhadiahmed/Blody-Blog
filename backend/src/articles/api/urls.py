from django.urls import path
from articles.api.views import ArticleViewSets
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'',ArticleViewSets,base_name='articles')
urlpatterns = router.urls





# from .views import (
#     ArticleDetailview,
#     ArticleListview,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView
#     )


# urlpatterns = [
#     path('',ArticleListview.as_view(),name="api-list"),
#     path('create/',ArticleCreateView.as_view(),name="api-create"),
#     path('<pk>',ArticleDetailview.as_view(),name="api-detail"),
#     path('<pk>/update/',ArticleUpdateView.as_view(),name="api-update"),
#     path('<pk>/delete/',ArticleDeleteView.as_view(),name="api-delete"),
# ]