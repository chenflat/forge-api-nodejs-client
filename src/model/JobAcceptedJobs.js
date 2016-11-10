/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The JobAcceptedJobs model module.
   * @module model/JobAcceptedJobs
   * @version 0.1.9
   */

   /**
    * Constructs a <code>JobAcceptedJobs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobAcceptedJobs} obj Optional instance to populate.
    * @return {module:model/JobAcceptedJobs} The populated <code>JobAcceptedJobs</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('output')) {
        obj['output'] = ApiClient.convertToType(data['output'], Object);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobAcceptedJobs</code>.
   * list of the requested outputs
   * @alias module:model/JobAcceptedJobs
   * @class
   * @param output {Object} identical to the request body. For more information please see the request body structure above.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobAcceptedJobs} obj Optional instance to populate.
   */
  var exports = function(output, theData, obj) {
    var _this = this;

    _this['output'] = output;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobAcceptedJobs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobAcceptedJobs} obj Optional instance to populate.
   * @return {module:model/JobAcceptedJobs} The populated <code>JobAcceptedJobs</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * identical to the request body. For more information please see the request body structure above.
   * @member {Object} output
   */
  exports.prototype['output'] = undefined;



  return exports;
}());


