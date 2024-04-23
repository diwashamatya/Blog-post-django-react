from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogSerializer

@api_view(['GET', 'POST'])
def blog_posts(request):
    if request.method == 'GET':
        blogs = BlogPost.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_blog_post(request, pk):
    blog = get_object_or_404(BlogPost, pk=pk)
    blog.delete()
    return Response(status=204)
