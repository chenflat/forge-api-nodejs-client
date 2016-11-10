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
   * The JobStlOutputPayloadAdvanced model module.
   * @module model/JobStlOutputPayloadAdvanced
   * @version 0.1.9
   */

   /**
    * Constructs a <code>JobStlOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobStlOutputPayloadAdvanced} obj Optional instance to populate.
    * @return {module:model/JobStlOutputPayloadAdvanced} The populated <code>JobStlOutputPayloadAdvanced</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('exportColor')) {
        obj['exportColor'] = ApiClient.convertToType(data['exportColor'], 'Boolean');
      }
      if (data.hasOwnProperty('exportFileStructure')) {
        obj['exportFileStructure'] = ApiClient.convertToType(data['exportFileStructure'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobStlOutputPayloadAdvanced</code>.
   * Advanced options for &#x60;stl&#x60; type.
   * @alias module:model/JobStlOutputPayloadAdvanced
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStlOutputPayloadAdvanced} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;





    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobStlOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStlOutputPayloadAdvanced} obj Optional instance to populate.
   * @return {module:model/JobStlOutputPayloadAdvanced} The populated <code>JobStlOutputPayloadAdvanced</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Default format is `binary`. Possible values are `binary` or `ascii`.
   * @member {module:model/JobStlOutputPayloadAdvanced.FormatEnum} format
   * @default 'binary'
   */
  exports.prototype['format'] = 'binary';
  /**
   * Color is exported by default. If set to `true`, color is exported. If set to `false`, color is not exported.
   * @member {Boolean} exportColor
   * @default true
   */
  exports.prototype['exportColor'] = true;
  /**
   * `single` (default): creates one STL file for all the input files (assembly file)  `multiple`: creates a separate STL file for each object 
   * @member {module:model/JobStlOutputPayloadAdvanced.ExportFileStructureEnum} exportFileStructure
   * @default 'single'
   */
  exports.prototype['exportFileStructure'] = 'single';


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "binary"
     * @const
     */
    "binary": "binary",
    /**
     * value: "ascii"
     * @const
     */
    "ascii": "ascii"  };

  /**
   * Allowed values for the <code>exportFileStructure</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExportFileStructureEnum = {
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };


  return exports;
}());


