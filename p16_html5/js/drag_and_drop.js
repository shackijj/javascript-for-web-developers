log_header("drag_and_drop.js");

(function() {
    function DDGame (id, pieces) {
        this.gameId = id;
        this.numPieces = pieces;
        this.arrPieces = null;
        this.Init();
    }


    DDGame.prototype.proxy = function (func, obj) {
        var obj = obj,
            args = Array.prototype.slice.call(arguments, 2);

        return function() {
            func.apply(obj, 
                args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    DDGame.prototype.Init = function () {
        this.arrPieces = this.initNumberArray(this.numPieces);
        this.arrPieces = this.shuffleArray(this.arrPieces);
        this.domGameContainer = document.getElementById(this.gameId);
        this.domGamePieces = Array.prototype.slice.call(
            this.domGameContainer.children);
        this.addClassesAndDataToAll();
        this.bindEvents();
        log("Init done");
    };

    DDGame.prototype.addClassesAndDataToAll = function() {
        var i,
            element;

        for(i = 0; i < this.numPieces; i++) {
            element = this.domGamePieces[i];
            element.classList.add("game-piece_" + this.arrPieces[i] + "piece");
            element.dataset.piece = this.arrPieces[i];
        }

        this.arrPieces = null;
    }

    DDGame.prototype.initNumberArray = function (number) {
        if (typeof number == "number") {
            var array = [];
            for(i = 0; i < number; i++) {
                array[i] = i + 1;
            }
            return array;
        } else {
            throw new Error("DDGame.prototype.initNumberArray: argument must be a number");
        }
    }

    DDGame.prototype.shuffleArray = function (array) {
        if (!(array instanceof Array)) {
            throw new Error("DDGame.prototype.shuffleArray: argument must be an array");
        }
        var m = array.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    };

    DDGame.prototype.bindEvents = function () {
        EventUtil.addHandler(this.domGameContainer, "dragstart", this.proxy(
            this.dragHandler, this));
        EventUtil.addHandler(this.domGameContainer, "drop", this.proxy(
            this.dropHandler, this));
        EventUtil.addHandler(this.domGameContainer, "dragover", this.proxy(
            this.eventPreventDefaulrHandler, this));
        EventUtil.addHandler(this.domGameContainer, "dragover", this.proxy(
            this.eventPreventDefaulrHandler, this));
    };


    DDGame.prototype.checkResult = function () {
        var prev, 
            next,
            i;

        for (i = 0, len = this.numPieces - 1; i < len;) {
            prev = parseInt(this.domGamePieces[i].dataset.piece);
            next = parseInt(this.domGamePieces[++i].dataset.piece);

            if (prev > next) {
                return;
            } 
        }

        log("You win!");
    };

    DDGame.prototype.eventPreventDefaulrHandler = function () {
        event = EventUtil.getEvent(event);
        event.preventDefault();
    };

    DDGame.prototype.dropHandler = function () {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event),
            srcPiece, 
            dstPiece,
            srcElement,
            dstElement;
        
        event.preventDefault();

        if (!event.dataTransfer) {
            log("dataTransfer is not supported");
            return;
        }
        
        srcPiece = event.dataTransfer.getData("text");
        dstPiece = target.dataset.piece;

        // log("Target " + srcPiece + " got a piece number " + dstPiece);
        if (srcPiece === dstPiece) {
            return;
        }

        srcClass = "game-piece_" + srcPiece + "piece";
        dstClass = "game-piece_" + dstPiece + "piece";

        srcElement = document.querySelector("." + srcClass);
        dstElement = document.querySelector("." + dstClass);

        srcElement.classList.remove(srcClass);
        srcElement.classList.add(dstClass);
        srcElement.dataset.piece = dstPiece;

        dstElement.classList.remove(dstClass);
        dstElement.classList.add(srcClass);
        dstElement.dataset.piece = srcPiece;
        this.checkResult();
    };

    DDGame.prototype.dragHandler = function (event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        if (event.dataTransfer) {
            event.dataTransfer.setData("text", target.dataset.piece);
            // It shoulde be configurable
            event.dataTransfer.setDragImage(target, 50, 50);
        }

    };

    var VanGoghGame = new DDGame("VanGoghGame", 9);
})();