
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogpost').insert([
        {
          // id: 1,
          title: 'What is MVC?',
          content: 'MVC stands for Model-View-Controller and is a software architectural pattern (reusable code) for implementing user interfaces. It is broken into 3 main parts: Models, Views, and Controllers',
          user_id: 1,
          selected: 'unselected',
          read: 'unread',
          starred: 'unstarred',
        },
        {
          // id: 2,
          title: 'Agile Values',
          content: 'The 4 agile values: 1. Individuals and interactions over processes and tools - This is about valuing the members of your team.  Communication should be open and continuous.  2. Working software over comprehensive documentation - The client values the actual work that is done.  Agile documents in user stories which give the developer enough to get started. 3. Customer collaboration over contract negotiation - Having a customer that is engaged throughout the development process makes it easier for the developer to give them what they want. 4. Responding to change over following a plan. Plans change! And we should always be planning.  Allows for priorities to shift as needed.',
          user_id: 2,
          selected: 'unselected',
          read: 'unread',
          starred: 'unstarred',
        },
        {
          // id: 3,
          title: 'MVVM and component-based architectures',
          content: 'MVVM stands for Model-view-viewmodel.  This architectural pattern separates development of the GUI (graphical user interface) and the backend data. As with MVC, you still have a  model (underlying data) and a view (structure, layout, appearance on user screen) but  rather than a controller you have a view model. The view model is like the controller in the MVC.  In the view model, the binder acts as middleman during communication between the view and the data binder (synchronizes data from client and server).  It allows you to decouple the view from the viewmodel and make updates to the view when it see changes in the view model and update the view model when it see changes in the view.This view model can isolate the view from really knowing what is going on in the backend/model. A component-based architectures seems different all together.  It deals with making each component its own entity with its own interface and ability to make calls to the server and update their interface.  Components are reusable but each copy still works independently.  MVC splits responsibilities horizontally while component-based splits them vertically so design and logic exist on the same level rather than different levels (MVC).',
          user_id: 1,
          selected: 'unselected',
          read: 'unread',
          starred: 'unstarred',
        },
      ]);
    });
};
