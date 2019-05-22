from rest_framework.generics import ListAPIView,RetrieveAPIView
from .serializers import ArticleSerializer
from articles.models import Article


class ArticleListview(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailview(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer