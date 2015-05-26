/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = json.id;
  profile.displayName = json.firstName;
  profile.username = json.profiles[0].email;
  profile.name = { familyName: json.firstName,
                   givenName: json.lastName };
 
  if (json.profiles[0].email) {
    profile.emails = [{ value: json.profiles[0].email }];
  }
  
  if(json.avatarUrl){
	profile.photos = [{ value: json.avatarUrl }];
  }
  
  return profile;
};
