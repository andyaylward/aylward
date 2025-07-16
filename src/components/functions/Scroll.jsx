import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const Scrolled = () => {

  // determined if page has scrolled and if the view is on mobile
  const [scrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {

      // Add footer class
      var footer = $('footer');
      var elementTop = footer.offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height();
      if (elementTop <=  viewportBottom) {
        footer.addClass("on-screen")
      } else if (footer.hasClass("on-screen")) {
        footer.removeClass("on-screen")
      }

      // Add visibility to scroll to top
      if ($(window).scrollTop() > 300) {
        $('.scroll-top').addClass('visible');
      } else if ($('.scroll-top').hasClass("visible")) {
        $('.scroll-top').removeClass("visible")
      }

    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

};

export default Scrolled;