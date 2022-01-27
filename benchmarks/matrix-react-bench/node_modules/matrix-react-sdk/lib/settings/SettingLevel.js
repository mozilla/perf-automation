"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingLevel = void 0;

/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents the various setting levels supported by the SettingsStore.
 */
let SettingLevel;
exports.SettingLevel = SettingLevel;

(function (SettingLevel) {
  SettingLevel["DEVICE"] = "device";
  SettingLevel["ROOM_DEVICE"] = "room-device";
  SettingLevel["ROOM_ACCOUNT"] = "room-account";
  SettingLevel["ACCOUNT"] = "account";
  SettingLevel["ROOM"] = "room";
  SettingLevel["CONFIG"] = "config";
  SettingLevel["DEFAULT"] = "default";
})(SettingLevel || (exports.SettingLevel = SettingLevel = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR0aW5ncy9TZXR0aW5nTGV2ZWwudHMiXSwibmFtZXMiOlsiU2V0dGluZ0xldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtJQUNZQSxZOzs7V0FBQUEsWTtBQUFBQSxFQUFBQSxZO0FBQUFBLEVBQUFBLFk7QUFBQUEsRUFBQUEsWTtBQUFBQSxFQUFBQSxZO0FBQUFBLEVBQUFBLFk7QUFBQUEsRUFBQUEsWTtBQUFBQSxFQUFBQSxZO0dBQUFBLFksNEJBQUFBLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHZhcmlvdXMgc2V0dGluZyBsZXZlbHMgc3VwcG9ydGVkIGJ5IHRoZSBTZXR0aW5nc1N0b3JlLlxuICovXG5leHBvcnQgZW51bSBTZXR0aW5nTGV2ZWwge1xuICAgIC8vIFRPRE86IFtUU10gRm9sbG93IG5hbWluZyBjb252ZW50aW9uXG4gICAgREVWSUNFID0gXCJkZXZpY2VcIixcbiAgICBST09NX0RFVklDRSA9IFwicm9vbS1kZXZpY2VcIixcbiAgICBST09NX0FDQ09VTlQgPSBcInJvb20tYWNjb3VudFwiLFxuICAgIEFDQ09VTlQgPSBcImFjY291bnRcIixcbiAgICBST09NID0gXCJyb29tXCIsXG4gICAgQ09ORklHID0gXCJjb25maWdcIixcbiAgICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXG59XG4iXX0=