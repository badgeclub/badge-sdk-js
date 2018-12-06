# Badge.AuthenticationErrorEntity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | A brief message descring the authentication error. | [optional] 
**authenticationMethod** | **String** | The method (if any) by which an authentication attempt was made. | [optional] 
**authenticationData** | **Object** | Additional data about the authentication attempt, if available. | [optional] 


<a name="MessageEnum"></a>
## Enum: MessageEnum


* `Not authenticated.` (value: `"Not authenticated."`)




<a name="AuthenticationMethodEnum"></a>
## Enum: AuthenticationMethodEnum


* `header` (value: `"Authorization token header"`)




