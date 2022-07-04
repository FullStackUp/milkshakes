import { Component, OnInit } from '@angular/core';
import { Milkshake } from '../interfaces/milkshake.interface';

@Component({
  selector: 'app-milkshake-container',
  templateUrl: './milkshake-container.component.html',
  styleUrls: ['./milkshake-container.component.scss'],
})
export class MilkshakeContainerComponent implements OnInit {
  public milkshakes: Milkshake[] = [
    {
      name: 'Vanilla special',
      img: 'http://img.taste.com.au/2TWekadq/taste/2016/11/top-10-milkshakes-image-1-64000-1.jpg',
      description:
        'Blend 1 tsp vanilla bean paste with the Basic milkshake. Pour into a milkshake glass. Top with whipped cream, a wafer and a cherry.',
    },
    {
      name: 'Cool mint',
      img: 'http://img.taste.com.au/8PS7KoSF/taste/2016/11/top-10-milkshakes-image-2-64001-1.jpg',
      description:
        'For 2 shakes, drizzle Cottee’s Ice Magic Choc Mint around 2 glasses. Blend 1 drop peppermint essence and 2 drops green food colouring with the Basic Milkshake. Divide between glasses, top with chocolate ice-cream and decorate with Nestlé Aero Peppermint Bubbles and a Mini Corinthian wafer.',
    },
    {
      name: 'Strawberry marshallow',
      img: 'http://img.taste.com.au/cfeZL_Is/taste/2016/11/top-10-milkshakes-image-3-64003-1.jpg',
      description:
        'Stir 10 pink marshmallows with 1 tbs milk in a small saucepan over medium heat until melted. Make Basic Milkshake. Add marshmallow mixture and 2 tbs strawberry jam to milkshake and blend. Cut 3 white marshmallows in half. Stick the cut sides to the inside of a tall glass. Pour the milkshake into the glass. Top with extra marshmallows.',
    },
    {
      name: ' Blueberry cheesecake',
      img: 'http://img.taste.com.au/WZNrdXzg/taste/2016/11/top-10-milkshakes-image-4-64005-1.jpg',
      description:
        'Make Basic Milkshake. Add 1/3 cup blueberries, 2 tbs cream cheese and 1 tbs caster sugar. Blend. Drizzle Cottee’s Ice Magic White Choc into a glass. Pour in the blueberry milkshake. Top with whipped cream, extra blueberries and 1 crumbled Arnott’s Granita biscuit.',
    },
    {
      name: 'Raspberry and white chocolate',
      img: 'http://img.taste.com.au/AzgQ7bGq/taste/2016/11/top-10-milkshakes-image-5-64007-1.jpg',
      description:
        'Dissolve 1 tbs raspberry jelly crystals with 1 tbs boiling water. Add 1 tbs cold water. Pour into a serving glass. Place in fridge for 2 hours or until set. Dip rim in finely grated white chocolate. Add 70g melted white chocolate to Basic Milkshake. Blend. Pour over jelly. Serve with a mini pink iced doughnut.',
    },
    {
      name: 'Pina colada',
      img: 'http://img.taste.com.au/l-X1P_9x/taste/2016/11/top-10-milkshakes-image-6-64008-1.jpg',
      description:
        'For 2 shakes, make Basic Milkshake, swapping the milk for coconut milk. Add 1 tsp vanilla bean paste, 60ml Malibu and 1/3 cup pineapple juice. Blend. Pour into 2 glasses. Top with fresh pineapple.',
    },
    {
      name: 'Triple nut caramel',
      img: 'http://img.taste.com.au/3QkP36jl/taste/2016/11/top-10-milkshakes-image-7-64009-1.jpg',
      description:
        'Make Basic Milkshake, reducing the milk to 1/3 cup. Add 1 tbs Nestlé Top ‘n’ Fill and 2 tbs smooth peanut butter. Blend. Pour 1/3 cup Top ‘n’ Fill into a bowl. Dip the rim of a milkshake glass into caramel, then in crushed mixed nuts. Pour in milkshake. Top with a scoop of vanilla ice-cream. Drizzle with extra caramel and sprinkle with extra nuts.',
    },
    {
      name: 'Neapolitan',
      img: 'http://img.taste.com.au/2bQVCE62/taste/2016/11/top-10-milkshakes-image-8-64010-1.jpg',
      description:
        'Drizzle strawberry topping down the side of a glass. Make Basic Milkshake, with 1 tsp vanilla bean paste. Pour half the mixture into the glass. Add 6 chopped strawberries to remainder. Blend. Swirl into the vanilla milkshake. Top with a scoop of chocolate ice-cream.',
    },
    {
      name: 'Choc malt',
      img: 'http://img.taste.com.au/SXr77TqG/taste/2016/11/top-10-milkshakes-image-9-64011-1.jpg',
      description:
        'Drizzle Cottee’s Ice Magic Chocolate into a milkshake glass. Make Basic Milkshake, using chocolate ice-cream instead of vanilla. Add 2 tbs powdered malt drink and blend. Pour into the glass. Top with whipped cream and chopped Arnott’s Original Tim Tams.',
    },
    {
      name: 'Apple pie puff',
      img: 'http://img.taste.com.au/RU1G5UuB/taste/2016/11/top-10-milkshakes-image-10-64013-1.jpg',
      description:
        'Preheat oven to 220C/200C fan forced. Cut 3 discs of different sizes from 1 sheet of defrosted puff pastry. Sprinkle with cinnamon sugar. Make a hole, large enough for a straw to fit, in each disc. Bake for 8 minutes or until golden. Make Basic Milkshake, with 1/2 cup canned pie apples and a generous sprinkle of cinnamon sugar. Blend. Place extra pie apple into the base of a glass. Pour over milkshake. Top with whipped cream. Sprinkle with ground cinnamon. Thread the pastry discs onto the straw.',
    },
  ];

  public selectedMilkshake: Milkshake = this.milkshakes[0];
  constructor() {}

  ngOnInit(): void {}
}
