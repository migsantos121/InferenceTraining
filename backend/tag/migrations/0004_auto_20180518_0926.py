# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-18 09:26
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tag', '0003_auto_20180509_1035'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='inference_to_tag_map',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='inferencetags',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='tagmodifiers',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='trainingtags',
            options={'managed': False},
        ),
    ]
