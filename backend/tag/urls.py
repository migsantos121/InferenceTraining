from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name = 'tag'

urlpatterns = [
    
	url(r'^$', views.index, name='index'),
	url(r'^api/getTagModifiers/', views.getTagModifiers),
	url(r'^api/getInferenceTags/', views.getInferenceTags),
	url(r'^api/getTrainingTags/', views.getTrainingTags),
	url(r'^api/fromTagsToMaps/', views.fromTagsToMaps),
	url(r'^api/submitMaps/', views.submitMaps),
]

urlpatterns = format_suffix_patterns(urlpatterns)