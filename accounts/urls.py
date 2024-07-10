from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, signup, login

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('api/', include(router.urls)),
]
