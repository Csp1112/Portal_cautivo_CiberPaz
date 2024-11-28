import boto3

def get_s3_client():
    return boto3.client('s3')

def get_transcribe_client(region="us-west-2"):
    return boto3.client('transcribe', region_name=region)
