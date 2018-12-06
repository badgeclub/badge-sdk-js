# BadgeApi.ProfilesApi

All URIs are relative to *https://badge-referrals-staging.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1Profiles**](ProfilesApi.md#getV1Profiles) | **GET** /v1/profiles | List Profiles


<a name="getV1Profiles"></a>
# **getV1Profiles**
> ProfileEntity getV1Profiles(authorization)

List Profiles

Returns a list of all the profiles

### Example
```javascript
var BadgeApi = require('badge_api');

var apiInstance = new BadgeApi.ProfilesApi();

var authorization = "authorization_example"; // String | An API token that authenticates and authorizes an API user. Passed as 'Authorization: [api_token]'.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1Profiles(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| An API token that authenticates and authorizes an API user. Passed as &#39;Authorization: [api_token]&#39;. | 

### Return type

[**ProfileEntity**](ProfileEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

