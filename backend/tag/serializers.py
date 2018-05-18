from models import Inference_to_Tag_Map
from rest_framework.serializers import ModelSerializer

class Inference_to_Tag_MapSerializer(ModelSerializer):
    class Meta:
        model = Inference_to_Tag_Map
        fields = ('inferencetoTagMap_id', 'inferenceTag_id', 'tag_id', 'mod_tag_id')