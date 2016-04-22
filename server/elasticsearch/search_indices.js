import {VolunteerProfiles} from '/lib/collections'

/**
 *
 * See easysearch:elasticsearch docs at https://atmospherejs.com/easysearch/elasticsearch
 *
 */

export const ESIndices = {
  VolunteerProfiles: new EasySearch.Index({
    collection: VolunteerProfiles,
    /** Example only **/
    fields: ['interests'],
    engine: new EasySearch.ElasticSearch({
      //body: (body) => {
      //  return body;
      //} // modify the body that's sent when searching
    })
  })
};


