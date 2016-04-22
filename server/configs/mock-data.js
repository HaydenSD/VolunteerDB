import {VolunteerProfiles} from '/lib/collections';

export default function() {
  if(VolunteerProfiles.find().fetch().length === 0) {
    let mockProfiles = [
      {
        email: "joe@example.com",
        interests: "Boating, fishing, hiking, and kickin' butt against the political establishment."
      },
      {
        email: "jane@example.com",
        interests: "Writing letters to the editor, working on my PhD, wine and dine with my husband"
      },
      {
        email: "bernie@example.com",
        interests: "Inciting a the political revolution, thinking about how to improve the lives of millions, drafting legislation"
      },
      {
        email: "carl@example.com",
        interests: "I'm a mobile web developer, experienced in Swift and Java, and I'm interested in using tech to help with the revolution"
      }
    ];
    mockProfiles.forEach((profile)=> {
      VolunteerProfiles.insert(profile);
    })
  }

}
