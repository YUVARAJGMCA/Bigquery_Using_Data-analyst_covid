from google.cloud import storage

bucket_storage ="covid_data_old"
file_path = "covid_19_india.csv"

bucket_client = storage.Client()
bucket_2 = bucket_client.bucket(bucket_storage)
blob = bucket_2.blob(file_path)
blob.upload_from_filename(file_path)

print(f'filename {file_path} uploaded to {bucket_storage}')