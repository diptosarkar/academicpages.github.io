��' u s e   s t r i c t ' ;   / /   c o d e   g e n e r a t e d   b y   p b f   v 3 . 2 . 1  
  
 / /   F e e d M e s s a g e   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   F e e d M e s s a g e   =   s e l f . F e e d M e s s a g e   =   { } ;  
  
 F e e d M e s s a g e . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( F e e d M e s s a g e . _ r e a d F i e l d ,   { h e a d e r :   n u l l ,   e n t i t y :   [ ] } ,   e n d ) ;  
 } ;  
 F e e d M e s s a g e . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . h e a d e r   =   F e e d H e a d e r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . e n t i t y . p u s h ( F e e d E n t i t y . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ) ;  
 } ;  
 F e e d M e s s a g e . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . h e a d e r )   p b f . w r i t e M e s s a g e ( 1 ,   F e e d H e a d e r . w r i t e ,   o b j . h e a d e r ) ;  
         i f   ( o b j . e n t i t y )   f o r   ( v a r   i   =   0 ;   i   <   o b j . e n t i t y . l e n g t h ;   i + + )   p b f . w r i t e M e s s a g e ( 2 ,   F e e d E n t i t y . w r i t e ,   o b j . e n t i t y [ i ] ) ;  
 } ;  
  
 / /   F e e d H e a d e r   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   F e e d H e a d e r   =   s e l f . F e e d H e a d e r   =   { } ;  
  
 F e e d H e a d e r . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( F e e d H e a d e r . _ r e a d F i e l d ,   { g t f s _ r e a l t i m e _ v e r s i o n :   " " ,   i n c r e m e n t a l i t y :   { " v a l u e " : 0 , " o p t i o n s " : { } } ,   t i m e s t a m p :   0 } ,   e n d ) ;  
 } ;  
 F e e d H e a d e r . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . g t f s _ r e a l t i m e _ v e r s i o n   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . i n c r e m e n t a l i t y   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . t i m e s t a m p   =   p b f . r e a d V a r i n t ( ) ;  
 } ;  
 F e e d H e a d e r . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . g t f s _ r e a l t i m e _ v e r s i o n )   p b f . w r i t e S t r i n g F i e l d ( 1 ,   o b j . g t f s _ r e a l t i m e _ v e r s i o n ) ;  
         i f   ( o b j . i n c r e m e n t a l i t y   ! =   u n d e f i n e d   & &   o b j . i n c r e m e n t a l i t y   ! = =   { " v a l u e " : 0 , " o p t i o n s " : { } } )   p b f . w r i t e V a r i n t F i e l d ( 2 ,   o b j . i n c r e m e n t a l i t y ) ;  
         i f   ( o b j . t i m e s t a m p )   p b f . w r i t e V a r i n t F i e l d ( 3 ,   o b j . t i m e s t a m p ) ;  
 } ;  
  
 F e e d H e a d e r . I n c r e m e n t a l i t y   =   {  
         " F U L L _ D A T A S E T " :   {  
                 " v a l u e " :   0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " D I F F E R E N T I A L " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 / /   F e e d E n t i t y   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   F e e d E n t i t y   =   s e l f . F e e d E n t i t y   =   { } ;  
  
 F e e d E n t i t y . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( F e e d E n t i t y . _ r e a d F i e l d ,   { i d :   " " ,   i s _ d e l e t e d :   f a l s e ,   t r i p _ u p d a t e :   n u l l ,   v e h i c l e :   n u l l ,   a l e r t :   n u l l } ,   e n d ) ;  
 } ;  
 F e e d E n t i t y . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . i s _ d e l e t e d   =   p b f . r e a d B o o l e a n ( ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . t r i p _ u p d a t e   =   T r i p U p d a t e . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . v e h i c l e   =   V e h i c l e P o s i t i o n . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . a l e r t   =   A l e r t . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
 } ;  
 F e e d E n t i t y . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . i d )   p b f . w r i t e S t r i n g F i e l d ( 1 ,   o b j . i d ) ;  
         i f   ( o b j . i s _ d e l e t e d )   p b f . w r i t e B o o l e a n F i e l d ( 2 ,   o b j . i s _ d e l e t e d ) ;  
         i f   ( o b j . t r i p _ u p d a t e )   p b f . w r i t e M e s s a g e ( 3 ,   T r i p U p d a t e . w r i t e ,   o b j . t r i p _ u p d a t e ) ;  
         i f   ( o b j . v e h i c l e )   p b f . w r i t e M e s s a g e ( 4 ,   V e h i c l e P o s i t i o n . w r i t e ,   o b j . v e h i c l e ) ;  
         i f   ( o b j . a l e r t )   p b f . w r i t e M e s s a g e ( 5 ,   A l e r t . w r i t e ,   o b j . a l e r t ) ;  
 } ;  
  
 / /   T r i p U p d a t e   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   T r i p U p d a t e   =   s e l f . T r i p U p d a t e   =   { } ;  
  
 T r i p U p d a t e . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T r i p U p d a t e . _ r e a d F i e l d ,   { t r i p :   n u l l ,   v e h i c l e :   n u l l ,   s t o p _ t i m e _ u p d a t e :   [ ] ,   t i m e s t a m p :   0 ,   d e l a y :   0 } ,   e n d ) ;  
 } ;  
 T r i p U p d a t e . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . t r i p   =   T r i p D e s c r i p t o r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . v e h i c l e   =   V e h i c l e D e s c r i p t o r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . s t o p _ t i m e _ u p d a t e . p u s h ( T r i p U p d a t e . S t o p T i m e U p d a t e . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . t i m e s t a m p   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . d e l a y   =   p b f . r e a d V a r i n t ( t r u e ) ;  
 } ;  
 T r i p U p d a t e . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . t r i p )   p b f . w r i t e M e s s a g e ( 1 ,   T r i p D e s c r i p t o r . w r i t e ,   o b j . t r i p ) ;  
         i f   ( o b j . v e h i c l e )   p b f . w r i t e M e s s a g e ( 3 ,   V e h i c l e D e s c r i p t o r . w r i t e ,   o b j . v e h i c l e ) ;  
         i f   ( o b j . s t o p _ t i m e _ u p d a t e )   f o r   ( v a r   i   =   0 ;   i   <   o b j . s t o p _ t i m e _ u p d a t e . l e n g t h ;   i + + )   p b f . w r i t e M e s s a g e ( 2 ,   T r i p U p d a t e . S t o p T i m e U p d a t e . w r i t e ,   o b j . s t o p _ t i m e _ u p d a t e [ i ] ) ;  
         i f   ( o b j . t i m e s t a m p )   p b f . w r i t e V a r i n t F i e l d ( 4 ,   o b j . t i m e s t a m p ) ;  
         i f   ( o b j . d e l a y )   p b f . w r i t e V a r i n t F i e l d ( 5 ,   o b j . d e l a y ) ;  
 } ;  
  
 / /   T r i p U p d a t e . S t o p T i m e E v e n t   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 T r i p U p d a t e . S t o p T i m e E v e n t   =   { } ;  
  
 T r i p U p d a t e . S t o p T i m e E v e n t . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T r i p U p d a t e . S t o p T i m e E v e n t . _ r e a d F i e l d ,   { d e l a y :   0 ,   t i m e :   0 ,   u n c e r t a i n t y :   0 } ,   e n d ) ;  
 } ;  
 T r i p U p d a t e . S t o p T i m e E v e n t . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . d e l a y   =   p b f . r e a d V a r i n t ( t r u e ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . t i m e   =   p b f . r e a d V a r i n t ( t r u e ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . u n c e r t a i n t y   =   p b f . r e a d V a r i n t ( t r u e ) ;  
 } ;  
 T r i p U p d a t e . S t o p T i m e E v e n t . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . d e l a y )   p b f . w r i t e V a r i n t F i e l d ( 1 ,   o b j . d e l a y ) ;  
         i f   ( o b j . t i m e )   p b f . w r i t e V a r i n t F i e l d ( 2 ,   o b j . t i m e ) ;  
         i f   ( o b j . u n c e r t a i n t y )   p b f . w r i t e V a r i n t F i e l d ( 3 ,   o b j . u n c e r t a i n t y ) ;  
 } ;  
  
 / /   T r i p U p d a t e . S t o p T i m e U p d a t e   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 T r i p U p d a t e . S t o p T i m e U p d a t e   =   { } ;  
  
 T r i p U p d a t e . S t o p T i m e U p d a t e . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T r i p U p d a t e . S t o p T i m e U p d a t e . _ r e a d F i e l d ,   { s t o p _ s e q u e n c e :   0 ,   s t o p _ i d :   " " ,   a r r i v a l :   n u l l ,   d e p a r t u r e :   n u l l ,   s c h e d u l e _ r e l a t i o n s h i p :   { " v a l u e " : 0 , " o p t i o n s " : { } } } ,   e n d ) ;  
 } ;  
 T r i p U p d a t e . S t o p T i m e U p d a t e . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . s t o p _ s e q u e n c e   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . s t o p _ i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . a r r i v a l   =   T r i p U p d a t e . S t o p T i m e E v e n t . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . d e p a r t u r e   =   T r i p U p d a t e . S t o p T i m e E v e n t . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . s c h e d u l e _ r e l a t i o n s h i p   =   p b f . r e a d V a r i n t ( ) ;  
 } ;  
 T r i p U p d a t e . S t o p T i m e U p d a t e . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . s t o p _ s e q u e n c e )   p b f . w r i t e V a r i n t F i e l d ( 1 ,   o b j . s t o p _ s e q u e n c e ) ;  
         i f   ( o b j . s t o p _ i d )   p b f . w r i t e S t r i n g F i e l d ( 4 ,   o b j . s t o p _ i d ) ;  
         i f   ( o b j . a r r i v a l )   p b f . w r i t e M e s s a g e ( 2 ,   T r i p U p d a t e . S t o p T i m e E v e n t . w r i t e ,   o b j . a r r i v a l ) ;  
         i f   ( o b j . d e p a r t u r e )   p b f . w r i t e M e s s a g e ( 3 ,   T r i p U p d a t e . S t o p T i m e E v e n t . w r i t e ,   o b j . d e p a r t u r e ) ;  
         i f   ( o b j . s c h e d u l e _ r e l a t i o n s h i p   ! =   u n d e f i n e d   & &   o b j . s c h e d u l e _ r e l a t i o n s h i p   ! = =   { " v a l u e " : 0 , " o p t i o n s " : { } } )   p b f . w r i t e V a r i n t F i e l d ( 5 ,   o b j . s c h e d u l e _ r e l a t i o n s h i p ) ;  
 } ;  
  
 T r i p U p d a t e . S t o p T i m e U p d a t e . S c h e d u l e R e l a t i o n s h i p   =   {  
         " S C H E D U L E D " :   {  
                 " v a l u e " :   0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S K I P P E D " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " N O _ D A T A " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 / /   V e h i c l e P o s i t i o n   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   V e h i c l e P o s i t i o n   =   s e l f . V e h i c l e P o s i t i o n   =   { } ;  
  
 V e h i c l e P o s i t i o n . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( V e h i c l e P o s i t i o n . _ r e a d F i e l d ,   { t r i p :   n u l l ,   v e h i c l e :   n u l l ,   p o s i t i o n :   n u l l ,   c u r r e n t _ s t o p _ s e q u e n c e :   0 ,   s t o p _ i d :   " " ,   c u r r e n t _ s t a t u s :   { " v a l u e " : 2 , " o p t i o n s " : { } } ,   t i m e s t a m p :   0 ,   c o n g e s t i o n _ l e v e l :   0 ,   o c c u p a n c y _ s t a t u s :   0 } ,   e n d ) ;  
 } ;  
 V e h i c l e P o s i t i o n . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . t r i p   =   T r i p D e s c r i p t o r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   8 )   o b j . v e h i c l e   =   V e h i c l e D e s c r i p t o r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . p o s i t i o n   =   P o s i t i o n . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . c u r r e n t _ s t o p _ s e q u e n c e   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   7 )   o b j . s t o p _ i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . c u r r e n t _ s t a t u s   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . t i m e s t a m p   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   6 )   o b j . c o n g e s t i o n _ l e v e l   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   9 )   o b j . o c c u p a n c y _ s t a t u s   =   p b f . r e a d V a r i n t ( ) ;  
 } ;  
 V e h i c l e P o s i t i o n . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . t r i p )   p b f . w r i t e M e s s a g e ( 1 ,   T r i p D e s c r i p t o r . w r i t e ,   o b j . t r i p ) ;  
         i f   ( o b j . v e h i c l e )   p b f . w r i t e M e s s a g e ( 8 ,   V e h i c l e D e s c r i p t o r . w r i t e ,   o b j . v e h i c l e ) ;  
         i f   ( o b j . p o s i t i o n )   p b f . w r i t e M e s s a g e ( 2 ,   P o s i t i o n . w r i t e ,   o b j . p o s i t i o n ) ;  
         i f   ( o b j . c u r r e n t _ s t o p _ s e q u e n c e )   p b f . w r i t e V a r i n t F i e l d ( 3 ,   o b j . c u r r e n t _ s t o p _ s e q u e n c e ) ;  
         i f   ( o b j . s t o p _ i d )   p b f . w r i t e S t r i n g F i e l d ( 7 ,   o b j . s t o p _ i d ) ;  
         i f   ( o b j . c u r r e n t _ s t a t u s   ! =   u n d e f i n e d   & &   o b j . c u r r e n t _ s t a t u s   ! = =   { " v a l u e " : 2 , " o p t i o n s " : { } } )   p b f . w r i t e V a r i n t F i e l d ( 4 ,   o b j . c u r r e n t _ s t a t u s ) ;  
         i f   ( o b j . t i m e s t a m p )   p b f . w r i t e V a r i n t F i e l d ( 5 ,   o b j . t i m e s t a m p ) ;  
         i f   ( o b j . c o n g e s t i o n _ l e v e l )   p b f . w r i t e V a r i n t F i e l d ( 6 ,   o b j . c o n g e s t i o n _ l e v e l ) ;  
         i f   ( o b j . o c c u p a n c y _ s t a t u s )   p b f . w r i t e V a r i n t F i e l d ( 9 ,   o b j . o c c u p a n c y _ s t a t u s ) ;  
 } ;  
  
 V e h i c l e P o s i t i o n . V e h i c l e S t o p S t a t u s   =   {  
         " I N C O M I N G _ A T " :   {  
                 " v a l u e " :   0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S T O P P E D _ A T " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " I N _ T R A N S I T _ T O " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 V e h i c l e P o s i t i o n . C o n g e s t i o n L e v e l   =   {  
         " U N K N O W N _ C O N G E S T I O N _ L E V E L " :   {  
                 " v a l u e " :   0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " R U N N I N G _ S M O O T H L Y " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S T O P _ A N D _ G O " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " C O N G E S T I O N " :   {  
                 " v a l u e " :   3 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S E V E R E _ C O N G E S T I O N " :   {  
                 " v a l u e " :   4 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 V e h i c l e P o s i t i o n . O c c u p a n c y S t a t u s   =   {  
         " E M P T Y " :   {  
                 " v a l u e " :   0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " M A N Y _ S E A T S _ A V A I L A B L E " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " F E W _ S E A T S _ A V A I L A B L E " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S T A N D I N G _ R O O M _ O N L Y " :   {  
                 " v a l u e " :   3 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " C R U S H E D _ S T A N D I N G _ R O O M _ O N L Y " :   {  
                 " v a l u e " :   4 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " F U L L " :   {  
                 " v a l u e " :   5 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " N O T _ A C C E P T I N G _ P A S S E N G E R S " :   {  
                 " v a l u e " :   6 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 / /   A l e r t   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   A l e r t   =   s e l f . A l e r t   =   { } ;  
  
 A l e r t . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( A l e r t . _ r e a d F i e l d ,   { a c t i v e _ p e r i o d :   [ ] ,   i n f o r m e d _ e n t i t y :   [ ] ,   c a u s e :   { " v a l u e " : 1 , " o p t i o n s " : { } } ,   e f f e c t :   { " v a l u e " : 8 , " o p t i o n s " : { } } ,   u r l :   n u l l ,   h e a d e r _ t e x t :   n u l l ,   d e s c r i p t i o n _ t e x t :   n u l l } ,   e n d ) ;  
 } ;  
 A l e r t . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . a c t i v e _ p e r i o d . p u s h ( T i m e R a n g e . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . i n f o r m e d _ e n t i t y . p u s h ( E n t i t y S e l e c t o r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ) ;  
         e l s e   i f   ( t a g   = = =   6 )   o b j . c a u s e   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   7 )   o b j . e f f e c t   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   8 )   o b j . u r l   =   T r a n s l a t e d S t r i n g . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   1 0 )   o b j . h e a d e r _ t e x t   =   T r a n s l a t e d S t r i n g . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   1 1 )   o b j . d e s c r i p t i o n _ t e x t   =   T r a n s l a t e d S t r i n g . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
 } ;  
 A l e r t . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . a c t i v e _ p e r i o d )   f o r   ( v a r   i   =   0 ;   i   <   o b j . a c t i v e _ p e r i o d . l e n g t h ;   i + + )   p b f . w r i t e M e s s a g e ( 1 ,   T i m e R a n g e . w r i t e ,   o b j . a c t i v e _ p e r i o d [ i ] ) ;  
         i f   ( o b j . i n f o r m e d _ e n t i t y )   f o r   ( i   =   0 ;   i   <   o b j . i n f o r m e d _ e n t i t y . l e n g t h ;   i + + )   p b f . w r i t e M e s s a g e ( 5 ,   E n t i t y S e l e c t o r . w r i t e ,   o b j . i n f o r m e d _ e n t i t y [ i ] ) ;  
         i f   ( o b j . c a u s e   ! =   u n d e f i n e d   & &   o b j . c a u s e   ! = =   { " v a l u e " : 1 , " o p t i o n s " : { } } )   p b f . w r i t e V a r i n t F i e l d ( 6 ,   o b j . c a u s e ) ;  
         i f   ( o b j . e f f e c t   ! =   u n d e f i n e d   & &   o b j . e f f e c t   ! = =   { " v a l u e " : 8 , " o p t i o n s " : { } } )   p b f . w r i t e V a r i n t F i e l d ( 7 ,   o b j . e f f e c t ) ;  
         i f   ( o b j . u r l )   p b f . w r i t e M e s s a g e ( 8 ,   T r a n s l a t e d S t r i n g . w r i t e ,   o b j . u r l ) ;  
         i f   ( o b j . h e a d e r _ t e x t )   p b f . w r i t e M e s s a g e ( 1 0 ,   T r a n s l a t e d S t r i n g . w r i t e ,   o b j . h e a d e r _ t e x t ) ;  
         i f   ( o b j . d e s c r i p t i o n _ t e x t )   p b f . w r i t e M e s s a g e ( 1 1 ,   T r a n s l a t e d S t r i n g . w r i t e ,   o b j . d e s c r i p t i o n _ t e x t ) ;  
 } ;  
  
 A l e r t . C a u s e   =   {  
         " U N K N O W N _ C A U S E " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " O T H E R _ C A U S E " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " T E C H N I C A L _ P R O B L E M " :   {  
                 " v a l u e " :   3 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S T R I K E " :   {  
                 " v a l u e " :   4 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " D E M O N S T R A T I O N " :   {  
                 " v a l u e " :   5 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " A C C I D E N T " :   {  
                 " v a l u e " :   6 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " H O L I D A Y " :   {  
                 " v a l u e " :   7 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " W E A T H E R " :   {  
                 " v a l u e " :   8 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " M A I N T E N A N C E " :   {  
                 " v a l u e " :   9 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " C O N S T R U C T I O N " :   {  
                 " v a l u e " :   1 0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " P O L I C E _ A C T I V I T Y " :   {  
                 " v a l u e " :   1 1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " M E D I C A L _ E M E R G E N C Y " :   {  
                 " v a l u e " :   1 2 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 A l e r t . E f f e c t   =   {  
         " N O _ S E R V I C E " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " R E D U C E D _ S E R V I C E " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S I G N I F I C A N T _ D E L A Y S " :   {  
                 " v a l u e " :   3 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " D E T O U R " :   {  
                 " v a l u e " :   4 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " A D D I T I O N A L _ S E R V I C E " :   {  
                 " v a l u e " :   5 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " M O D I F I E D _ S E R V I C E " :   {  
                 " v a l u e " :   6 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " O T H E R _ E F F E C T " :   {  
                 " v a l u e " :   7 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " U N K N O W N _ E F F E C T " :   {  
                 " v a l u e " :   8 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " S T O P _ M O V E D " :   {  
                 " v a l u e " :   9 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 / /   T i m e R a n g e   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   T i m e R a n g e   =   s e l f . T i m e R a n g e   =   { } ;  
  
 T i m e R a n g e . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T i m e R a n g e . _ r e a d F i e l d ,   { s t a r t :   0 ,   e n d :   0 } ,   e n d ) ;  
 } ;  
 T i m e R a n g e . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . s t a r t   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . e n d   =   p b f . r e a d V a r i n t ( ) ;  
 } ;  
 T i m e R a n g e . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . s t a r t )   p b f . w r i t e V a r i n t F i e l d ( 1 ,   o b j . s t a r t ) ;  
         i f   ( o b j . e n d )   p b f . w r i t e V a r i n t F i e l d ( 2 ,   o b j . e n d ) ;  
 } ;  
  
 / /   P o s i t i o n   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   P o s i t i o n   =   s e l f . P o s i t i o n   =   { } ;  
  
 P o s i t i o n . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( P o s i t i o n . _ r e a d F i e l d ,   { l a t i t u d e :   0 ,   l o n g i t u d e :   0 ,   b e a r i n g :   0 ,   o d o m e t e r :   0 ,   s p e e d :   0 } ,   e n d ) ;  
 } ;  
 P o s i t i o n . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . l a t i t u d e   =   p b f . r e a d F l o a t ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . l o n g i t u d e   =   p b f . r e a d F l o a t ( ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . b e a r i n g   =   p b f . r e a d F l o a t ( ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . o d o m e t e r   =   p b f . r e a d D o u b l e ( ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . s p e e d   =   p b f . r e a d F l o a t ( ) ;  
 } ;  
 P o s i t i o n . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . l a t i t u d e )   p b f . w r i t e F l o a t F i e l d ( 1 ,   o b j . l a t i t u d e ) ;  
         i f   ( o b j . l o n g i t u d e )   p b f . w r i t e F l o a t F i e l d ( 2 ,   o b j . l o n g i t u d e ) ;  
         i f   ( o b j . b e a r i n g )   p b f . w r i t e F l o a t F i e l d ( 3 ,   o b j . b e a r i n g ) ;  
         i f   ( o b j . o d o m e t e r )   p b f . w r i t e D o u b l e F i e l d ( 4 ,   o b j . o d o m e t e r ) ;  
         i f   ( o b j . s p e e d )   p b f . w r i t e F l o a t F i e l d ( 5 ,   o b j . s p e e d ) ;  
 } ;  
  
 / /   T r i p D e s c r i p t o r   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   T r i p D e s c r i p t o r   =   s e l f . T r i p D e s c r i p t o r   =   { } ;  
  
 T r i p D e s c r i p t o r . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T r i p D e s c r i p t o r . _ r e a d F i e l d ,   { t r i p _ i d :   " " ,   r o u t e _ i d :   " " ,   d i r e c t i o n _ i d :   0 ,   s t a r t _ t i m e :   " " ,   s t a r t _ d a t e :   " " ,   s c h e d u l e _ r e l a t i o n s h i p :   0 } ,   e n d ) ;  
 } ;  
 T r i p D e s c r i p t o r . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . t r i p _ i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . r o u t e _ i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   6 )   o b j . d i r e c t i o n _ i d   =   p b f . r e a d V a r i n t ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . s t a r t _ t i m e   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . s t a r t _ d a t e   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . s c h e d u l e _ r e l a t i o n s h i p   =   p b f . r e a d V a r i n t ( ) ;  
 } ;  
 T r i p D e s c r i p t o r . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . t r i p _ i d )   p b f . w r i t e S t r i n g F i e l d ( 1 ,   o b j . t r i p _ i d ) ;  
         i f   ( o b j . r o u t e _ i d )   p b f . w r i t e S t r i n g F i e l d ( 5 ,   o b j . r o u t e _ i d ) ;  
         i f   ( o b j . d i r e c t i o n _ i d )   p b f . w r i t e V a r i n t F i e l d ( 6 ,   o b j . d i r e c t i o n _ i d ) ;  
         i f   ( o b j . s t a r t _ t i m e )   p b f . w r i t e S t r i n g F i e l d ( 2 ,   o b j . s t a r t _ t i m e ) ;  
         i f   ( o b j . s t a r t _ d a t e )   p b f . w r i t e S t r i n g F i e l d ( 3 ,   o b j . s t a r t _ d a t e ) ;  
         i f   ( o b j . s c h e d u l e _ r e l a t i o n s h i p )   p b f . w r i t e V a r i n t F i e l d ( 4 ,   o b j . s c h e d u l e _ r e l a t i o n s h i p ) ;  
 } ;  
  
 T r i p D e s c r i p t o r . S c h e d u l e R e l a t i o n s h i p   =   {  
         " S C H E D U L E D " :   {  
                 " v a l u e " :   0 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " A D D E D " :   {  
                 " v a l u e " :   1 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " U N S C H E D U L E D " :   {  
                 " v a l u e " :   2 ,  
                 " o p t i o n s " :   { }  
         } ,  
         " C A N C E L E D " :   {  
                 " v a l u e " :   3 ,  
                 " o p t i o n s " :   { }  
         }  
 } ;  
  
 / /   V e h i c l e D e s c r i p t o r   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   V e h i c l e D e s c r i p t o r   =   s e l f . V e h i c l e D e s c r i p t o r   =   { } ;  
  
 V e h i c l e D e s c r i p t o r . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( V e h i c l e D e s c r i p t o r . _ r e a d F i e l d ,   { i d :   " " ,   l a b e l :   " " ,   l i c e n s e _ p l a t e :   " " } ,   e n d ) ;  
 } ;  
 V e h i c l e D e s c r i p t o r . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . l a b e l   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . l i c e n s e _ p l a t e   =   p b f . r e a d S t r i n g ( ) ;  
 } ;  
 V e h i c l e D e s c r i p t o r . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . i d )   p b f . w r i t e S t r i n g F i e l d ( 1 ,   o b j . i d ) ;  
         i f   ( o b j . l a b e l )   p b f . w r i t e S t r i n g F i e l d ( 2 ,   o b j . l a b e l ) ;  
         i f   ( o b j . l i c e n s e _ p l a t e )   p b f . w r i t e S t r i n g F i e l d ( 3 ,   o b j . l i c e n s e _ p l a t e ) ;  
 } ;  
  
 / /   E n t i t y S e l e c t o r   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   E n t i t y S e l e c t o r   =   s e l f . E n t i t y S e l e c t o r   =   { } ;  
  
 E n t i t y S e l e c t o r . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( E n t i t y S e l e c t o r . _ r e a d F i e l d ,   { a g e n c y _ i d :   " " ,   r o u t e _ i d :   " " ,   r o u t e _ t y p e :   0 ,   t r i p :   n u l l ,   s t o p _ i d :   " " } ,   e n d ) ;  
 } ;  
 E n t i t y S e l e c t o r . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . a g e n c y _ i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . r o u t e _ i d   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   3 )   o b j . r o u t e _ t y p e   =   p b f . r e a d V a r i n t ( t r u e ) ;  
         e l s e   i f   ( t a g   = = =   4 )   o b j . t r i p   =   T r i p D e s c r i p t o r . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ;  
         e l s e   i f   ( t a g   = = =   5 )   o b j . s t o p _ i d   =   p b f . r e a d S t r i n g ( ) ;  
 } ;  
 E n t i t y S e l e c t o r . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . a g e n c y _ i d )   p b f . w r i t e S t r i n g F i e l d ( 1 ,   o b j . a g e n c y _ i d ) ;  
         i f   ( o b j . r o u t e _ i d )   p b f . w r i t e S t r i n g F i e l d ( 2 ,   o b j . r o u t e _ i d ) ;  
         i f   ( o b j . r o u t e _ t y p e )   p b f . w r i t e V a r i n t F i e l d ( 3 ,   o b j . r o u t e _ t y p e ) ;  
         i f   ( o b j . t r i p )   p b f . w r i t e M e s s a g e ( 4 ,   T r i p D e s c r i p t o r . w r i t e ,   o b j . t r i p ) ;  
         i f   ( o b j . s t o p _ i d )   p b f . w r i t e S t r i n g F i e l d ( 5 ,   o b j . s t o p _ i d ) ;  
 } ;  
  
 / /   T r a n s l a t e d S t r i n g   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 v a r   T r a n s l a t e d S t r i n g   =   s e l f . T r a n s l a t e d S t r i n g   =   { } ;  
  
 T r a n s l a t e d S t r i n g . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T r a n s l a t e d S t r i n g . _ r e a d F i e l d ,   { t r a n s l a t i o n :   [ ] } ,   e n d ) ;  
 } ;  
 T r a n s l a t e d S t r i n g . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . t r a n s l a t i o n . p u s h ( T r a n s l a t e d S t r i n g . T r a n s l a t i o n . r e a d ( p b f ,   p b f . r e a d V a r i n t ( )   +   p b f . p o s ) ) ;  
 } ;  
 T r a n s l a t e d S t r i n g . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . t r a n s l a t i o n )   f o r   ( v a r   i   =   0 ;   i   <   o b j . t r a n s l a t i o n . l e n g t h ;   i + + )   p b f . w r i t e M e s s a g e ( 1 ,   T r a n s l a t e d S t r i n g . T r a n s l a t i o n . w r i t e ,   o b j . t r a n s l a t i o n [ i ] ) ;  
 } ;  
  
 / /   T r a n s l a t e d S t r i n g . T r a n s l a t i o n   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  
 T r a n s l a t e d S t r i n g . T r a n s l a t i o n   =   { } ;  
  
 T r a n s l a t e d S t r i n g . T r a n s l a t i o n . r e a d   =   f u n c t i o n   ( p b f ,   e n d )   {  
         r e t u r n   p b f . r e a d F i e l d s ( T r a n s l a t e d S t r i n g . T r a n s l a t i o n . _ r e a d F i e l d ,   { t e x t :   " " ,   l a n g u a g e :   " " } ,   e n d ) ;  
 } ;  
 T r a n s l a t e d S t r i n g . T r a n s l a t i o n . _ r e a d F i e l d   =   f u n c t i o n   ( t a g ,   o b j ,   p b f )   {  
         i f   ( t a g   = = =   1 )   o b j . t e x t   =   p b f . r e a d S t r i n g ( ) ;  
         e l s e   i f   ( t a g   = = =   2 )   o b j . l a n g u a g e   =   p b f . r e a d S t r i n g ( ) ;  
 } ;  
 T r a n s l a t e d S t r i n g . T r a n s l a t i o n . w r i t e   =   f u n c t i o n   ( o b j ,   p b f )   {  
         i f   ( o b j . t e x t )   p b f . w r i t e S t r i n g F i e l d ( 1 ,   o b j . t e x t ) ;  
         i f   ( o b j . l a n g u a g e )   p b f . w r i t e S t r i n g F i e l d ( 2 ,   o b j . l a n g u a g e ) ;  
 } ;  
 
