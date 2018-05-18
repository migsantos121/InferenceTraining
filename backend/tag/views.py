# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

#Default
import requests
import openpyxl
import json

#Django
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core import serializers
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.decorators import login_required
from django.utils.crypto import get_random_string
from django.db.models import Q


#Rest_Framework
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

#Own

from models import InferenceTags, TagModifiers, TrainingTags, Inference_to_Tag_Map

# SECRET FOR JWT
SECRET = 'Y2UiOmZhbHNlLCJwaG9uZW'
# Create your views here.



def index(request):
    return Response({'status': "API is running"})

@api_view(['POST'])
def fromTagsToMaps(request):
    if request.method == 'POST':
        inferenceTag_id = request.data['inferenceTag_id']
        modTag_id = request.data['modTag_id']


        try:
            inference_to_Tag_Map = Inference_to_Tag_Map.objects.filter(Q(inferenceTag_id= inferenceTag_id)&Q(mod_tag_id= modTag_id))
        except Inference_to_Tag_Map.DoesNotExist:
            inference_to_Tag_Map = None
        
        if inference_to_Tag_Map is None:
            return Response({'error': { 'message':"No result"}})
        else:
            data = []
            for item in inference_to_Tag_Map:
                trainingTag = item.tag.tag
                modTag = item.mod_tag.tagModifier
                inferenceTag = item.inferenceTag.inferencetag
                inferencetoTagMap_id = item.inferencetoTagMap_id
                
                data.append({
                    'id': inferencetoTagMap_id,
                    'inferenceTag_id': item.inferenceTag_id,
                    'inferenceTag': inferenceTag,
                    'modTag_id': item.mod_tag_id,
                    'modTag': modTag,
                    'trainingTag_id': item.tag_id,
                    'trainingTag': trainingTag,
                })
            return Response(data, status=200)

@api_view(['POST'])
def submitMaps(request):
    if request.method == 'POST':
        inferenceTag_id = request.data['inferenceTag_id']
        modTag_id = request.data['modTag_id']
        trainingTag_ids = request.data['trainingTag_ids']

        try:
            Inference_to_Tag_Map.objects.filter(Q(inferenceTag_id= inferenceTag_id)&Q(mod_tag_id= modTag_id)).delete()
            for trainingTag_id in trainingTag_ids:
                newitem = Inference_to_Tag_Map(inferenceTag_id= inferenceTag_id, mod_tag_id= modTag_id, tag_id= trainingTag_id)
                newitem.save()
            return Response({'success': 'true'}, status=200)
        except:
            return Response({'success': 'false'}, status=200)


@api_view(['GET'])
def getTagModifiers(request):
    tagModifiers = TagModifiers.objects.all()
    data = []
    for item in tagModifiers:
        mod_tag_id = item.mod_tag_id
        tagModifier = item.tagModifier
        data.append({
            'id': mod_tag_id,
            'tagModifier': tagModifier,
        })
    return Response(data, status=200)

@api_view(['GET'])
def getInferenceTags(request):
    inferenceTags = InferenceTags.objects.all()
    data = []
    for item in inferenceTags:
        inferenceTag_id = item.inferenceTag_id
        inferencetag = item.inferencetag
        data.append({
            'id': inferenceTag_id,
            'inferencetag': inferencetag,
        })
    return Response(data, status=200)

@api_view(['GET'])
def getTrainingTags(request):
    trainingTags = TrainingTags.objects.all()
    data = []
    for item in trainingTags:
        tag_id = item.tag_id
        tag = item.tag
        data.append({
            'id': tag_id,
            'tag': tag,
        })
    return Response(data, status=200)