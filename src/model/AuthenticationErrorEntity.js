/**
 * Badge API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * Contact: justin.molineaux@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BadgeApi) {
      root.BadgeApi = {};
    }
    root.BadgeApi.AuthenticationErrorEntity = factory(root.BadgeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthenticationErrorEntity model module.
   * @module model/AuthenticationErrorEntity
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>AuthenticationErrorEntity</code>.
   * Returns a list of all the profiles
   * @alias module:model/AuthenticationErrorEntity
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AuthenticationErrorEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationErrorEntity} obj Optional instance to populate.
   * @return {module:model/AuthenticationErrorEntity} The populated <code>AuthenticationErrorEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('authentication_method')) {
        obj['authentication_method'] = ApiClient.convertToType(data['authentication_method'], 'String');
      }
      if (data.hasOwnProperty('authentication_data')) {
        obj['authentication_data'] = ApiClient.convertToType(data['authentication_data'], Object);
      }
    }
    return obj;
  }

  /**
   * A brief message descring the authentication error.
   * @member {module:model/AuthenticationErrorEntity.MessageEnum} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The method (if any) by which an authentication attempt was made.
   * @member {module:model/AuthenticationErrorEntity.AuthenticationMethodEnum} authentication_method
   */
  exports.prototype['authentication_method'] = undefined;
  /**
   * Additional data about the authentication attempt, if available.
   * @member {Object} authentication_data
   */
  exports.prototype['authentication_data'] = undefined;


  /**
   * Allowed values for the <code>message</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MessageEnum = {
    /**
     * value: "Not authenticated."
     * @const
     */
    "Not authenticated.": "Not authenticated."  };

  /**
   * Allowed values for the <code>authentication_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthenticationMethodEnum = {
    /**
     * value: "Authorization token header"
     * @const
     */
    "header": "Authorization token header"  };


  return exports;
}));

