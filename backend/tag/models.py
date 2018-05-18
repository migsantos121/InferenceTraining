# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from django.contrib import admin
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import gettext as _
from django.core.validators import FileExtensionValidator

DEFAULT_LENGTH = 50

# Create your models here.

class InferenceTags(models.Model):  #Staff Account
    inferenceTag_id = models.AutoField(primary_key=True)
    inferencetag = models.CharField(max_length=DEFAULT_LENGTH, blank=True)
    class Meta:
       managed = False
       db_table = 'InferenceTags'

class TagModifiers(models.Model):
    mod_tag_id = models.AutoField(primary_key=True)
    tagModifier = models.CharField(max_length=DEFAULT_LENGTH, blank=True)
    class Meta:
       managed = False
       db_table = 'tagModifiers'

class TrainingTags(models.Model):
    tag_id = models.AutoField(primary_key=True)
    tag = models.CharField(max_length=DEFAULT_LENGTH, blank=True)
    class Meta:
       managed = False
       db_table = 'TrainingTags'

class Inference_to_Tag_Map(models.Model):
    inferencetoTagMap_id = models.AutoField(primary_key=True)
    inferenceTag = models.ForeignKey('InferenceTags', on_delete = models.CASCADE)
    tag = models.ForeignKey('TrainingTags', on_delete = models.CASCADE)
    mod_tag = models.ForeignKey('TagModifiers', on_delete = models.CASCADE)
    class Meta:
       managed = False
       db_table = 'Inference_to_Tag_Map'