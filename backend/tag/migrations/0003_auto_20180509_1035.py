# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-09 10:35
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tag', '0002_remove_inference_to_tag_map_inferencetotagmap_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='inference_to_tag_map',
            old_name='mod_tag_id',
            new_name='modTag',
        ),
        migrations.RenameField(
            model_name='inference_to_tag_map',
            old_name='tag_id',
            new_name='trainingTag',
        ),
    ]
