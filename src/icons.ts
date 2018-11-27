import { library } from '@fortawesome/fontawesome-svg-core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';


const icons = [
  faFacebookF, faTwitter, faGooglePlusG,
  faWhatsapp, faLink
];

library.add(...icons);
