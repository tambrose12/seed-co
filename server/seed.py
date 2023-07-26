
from app import app
from models import db, Seed

with app.app_context():

    Seed.query.delete()
    db.session.commit()

    luffa = Seed(image='https://hips.hearstapps.com/hmg-prod/images/981/articles/2017/05/growloofah-main-1000-1509142321.jpg?resize=1200:*',
                 name='Luffa/Loofah', price=5.99, in_stock=True)

    bell = Seed(image='https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
                name='Bell Peppers', price=2.00, in_stock=True)

    cones = Seed(image='https://images.unsplash.com/photo-1672358794204-05641817317c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                 name='Cone Flowers & Echinacea', price=2.50, in_stock=True)

    bes = Seed(image='https://images.unsplash.com/photo-1648919416343-dca62f33c085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
               name="Black Eyed Susans", price=2.50, in_stock=True)

    mg = Seed(image='https://images.unsplash.com/photo-1629574823441-bff47c9133d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              name="Morning Glory", price=2.00, in_stock=True)

    lantana = Seed(image='https://images.unsplash.com/photo-1634610145230-ff8d78c15562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
                   name='Lantana', price=5.99, in_stock=True)

    zinnia = Seed(image='https://images.unsplash.com/photo-1597233294136-e3bdc4201197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
                  name='Zinnia', price=2.50, in_stock=True)

    wm = Seed(image='https://cdn.pixabay.com/photo/2020/01/07/20/55/watermelon-4748608_1280.jpg',
              name='Watermelon - Variety', price=2.50, in_stock=True)

    tomato = Seed(image='https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_1280.jpg',
                  name='Tomato - Variety', price=2.50, in_stock=True)

    cl = Seed(image='https://cdn.pixabay.com/photo/2014/07/08/14/17/muskmelons-387466_1280.jpg',
              name='Cantaloupe', price=2.00, in_stock=True)

    db.session.add_all([luffa, bell, cones, bes, mg,
                       lantana, zinnia, wm, tomato, cl])

    db.session.commit()
