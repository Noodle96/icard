from django.urls import path
from rest_framework.routers import DefaultRouter
from users.api.views import UserApiViewSet, USerView

router_user = DefaultRouter()
router_user.register(
    prefix='users', basename='users', viewset=UserApiViewSet
)

urlpatterns = [
    path('auth/me/', USerView.as_view())
]
